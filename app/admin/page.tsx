"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Shield, LogOut } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface DashboardData {
  stats: {
    total_users: number
    active_users: number
    new_this_week: number
    active_this_week: number
  }
  users: User[]
  transactions: Transaction[]
  usage_by_level: { reason: string; count: number }[]
}

interface User {
  user_id: string
  email: string
  full_name: string
  organisation: string
  role: "admin" | "formulator"
  credit_balance: number
  credits_spent: number
  last_login: string | null
  is_active: boolean
}

interface Transaction {
  transaction_id: string
  created_at: string
  email: string
  reason: string
  delta: number
  formulation_id: string | null
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string | null) {
  if (!iso) return "Never"
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  gold,
}: {
  label: string
  value: number | undefined
  gold?: boolean
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 10,
        border: "1px solid #E5E7EB",
        padding: "20px 24px",
        flex: 1,
        minWidth: 0,
      }}
    >
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#9CA3AF",
          fontFamily: "var(--font-inter)",
          margin: "0 0 8px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: gold ? "#D4A843" : "#0D1B2A",
          fontFamily: "var(--font-inter)",
          margin: 0,
          lineHeight: 1,
        }}
      >
        {value ?? "—"}
      </p>
    </div>
  )
}

function RolePill({ role }: { role: "admin" | "formulator" }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: 20,
        background: role === "admin" ? "#0D1B2A" : "#F3F4F6",
        color: role === "admin" ? "#ffffff" : "#6B7280",
        fontFamily: "var(--font-inter)",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {role}
    </span>
  )
}

function StatusPill({ active }: { active: boolean }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: 20,
        background: active ? "#D1FAE5" : "#FEE2E2",
        color: active ? "#065F46" : "#991B1B",
        fontFamily: "var(--font-inter)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
      }}
    >
      {active ? "Active" : "Inactive"}
    </span>
  )
}

const TX_PILL: Record<string, { bg: string; color: string; label: string }> = {
  admin_grant: { bg: "#FEF3C7", color: "#92400E", label: "GRANT" },
  quick:       { bg: "#DBEAFE", color: "#1E40AF", label: "QUICK" },
  brief:       { bg: "#EDE9FE", color: "#5B21B6", label: "BRIEF" },
  dossier:     { bg: "#FEF3C7", color: "#B45309", label: "DOSSIER" },
}

function TxPill({ reason }: { reason: string }) {
  const style = TX_PILL[reason] ?? { bg: "#F3F4F6", color: "#6B7280", label: reason.toUpperCase() }
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: 20,
        background: style.bg,
        color: style.color,
        fontFamily: "var(--font-inter)",
        letterSpacing: "0.04em",
      }}
    >
      {style.label}
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#9CA3AF",
        fontFamily: "var(--font-inter)",
        margin: "0 0 10px",
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Per-user grant state
  const [grantInputs, setGrantInputs] = useState<Record<string, string>>({})
  const [grantFeedback, setGrantFeedback] = useState<Record<string, "success" | "error" | null>>({})

  useEffect(() => {
    const token = localStorage.getItem("tf_access_token")
    if (!token) {
      window.location.href = "https://theformulator.ai"
      return
    }

    fetch("https://api.theformulator.ai/admin/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (res.status === 403) {
          setError("Access denied — admin only")
          setTimeout(() => {
            window.location.href = "/morning-brief"
          }, 2000)
          return
        }
        if (!res.ok) throw new Error("Failed to load dashboard")
        const json = await res.json()
        setData(json)
      })
      .catch(() => setError("Failed to connect to API"))
      .finally(() => setLoading(false))
  }, [])

  function handleGrantCredits(userId: string, currentBalance: number) {
    const token = localStorage.getItem("tf_access_token")
    const credits = parseInt(grantInputs[userId] ?? "0", 10)
    if (!credits || isNaN(credits)) return

    fetch("https://api.theformulator.ai/admin/grant-credits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user_id: userId, credits }),
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        setData((prev) => {
          if (!prev) return prev
          return {
            ...prev,
            users: prev.users.map((u) =>
              u.user_id === userId
                ? { ...u, credit_balance: currentBalance + credits }
                : u
            ),
          }
        })
        setGrantFeedback((f) => ({ ...f, [userId]: "success" }))
        setGrantInputs((i) => ({ ...i, [userId]: "" }))
        setTimeout(() => setGrantFeedback((f) => ({ ...f, [userId]: null })), 2000)
      })
      .catch(() => {
        setGrantFeedback((f) => ({ ...f, [userId]: "error" }))
        setTimeout(() => setGrantFeedback((f) => ({ ...f, [userId]: null })), 2000)
      })
  }

  function handleToggleActive(userId: string, currentStatus: boolean) {
    const token = localStorage.getItem("tf_access_token")

    fetch("https://api.theformulator.ai/admin/set-active", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user_id: userId, is_active: !currentStatus }),
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        setData((prev) => {
          if (!prev) return prev
          return {
            ...prev,
            users: prev.users.map((u) =>
              u.user_id === userId ? { ...u, is_active: !currentStatus } : u
            ),
          }
        })
      })
      .catch(() => {})
  }

  // ── Render ──

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F4F6F9",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Topbar */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #E5E7EB",
          height: 56,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          gap: 12,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Image
          src="/logo.svg"
          alt="theformulator.ai"
          width={28}
          height={28}
          loading="eager"
          style={{ width: 28, height: 28 }}
        />
        <span
          style={{
            fontSize: 13,
            color: "#9CA3AF",
            fontFamily: "var(--font-inter)",
          }}
        >
          /
        </span>
        <div className="flex items-center" style={{ gap: 6 }}>
          <Shield size={14} color="#D4A843" strokeWidth={2} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#0D1B2A",
              fontFamily: "var(--font-inter)",
            }}
          >
            Admin Dashboard
          </span>
        </div>
        <div style={{ flex: 1 }} />
        <a
          href="/morning-brief"
          style={{
            fontSize: 13,
            color: "#6B7280",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <LogOut size={14} />
          Back to app
        </a>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 64px" }}>

        {/* Error state */}
        {error && (
          <div
            style={{
              background: "#FEE2E2",
              border: "1px solid #FECACA",
              borderRadius: 10,
              padding: "16px 20px",
              color: "#991B1B",
              fontSize: 14,
              marginBottom: 24,
            }}
          >
            {error}
          </div>
        )}

        {/* Loading state */}
        {loading && !error && (
          <div style={{ textAlign: "center", paddingTop: 80, color: "#9CA3AF", fontSize: 14 }}>
            Loading dashboard...
          </div>
        )}

        {data && (
          <>
            {/* ── Section 1: Stats row ── */}
            <div className="flex flex-wrap" style={{ gap: 12, marginBottom: 24 }}>
              <StatCard label="Total Users" value={data.stats.total_users} />
              <StatCard label="Active Users" value={data.stats.active_users} />
              <StatCard label="New This Week" value={data.stats.new_this_week} gold />
              <StatCard label="Active This Week" value={data.stats.active_this_week} />
            </div>

            {/* ── Section 2: Users table ── */}
            <div style={{ marginTop: 24 }}>
              <SectionLabel>All Users</SectionLabel>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 10,
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                }}
              >
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                        {["User", "Role", "Credits", "Spent", "Last Login", "Status", "Actions"].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "10px 16px",
                              textAlign: "left",
                              fontSize: 10,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              color: "#9CA3AF",
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.users.map((user, i) => (
                        <tr
                          key={user.user_id}
                          style={{
                            borderBottom: i < data.users.length - 1 ? "1px solid #F3F4F6" : "none",
                          }}
                        >
                          {/* User */}
                          <td style={{ padding: "12px 16px" }}>
                            <p style={{ margin: 0, fontWeight: 500, color: "#0D1B2A", fontSize: 13 }}>
                              {user.email}
                            </p>
                            {user.full_name && (
                              <p style={{ margin: 0, fontSize: 11, color: "#6B7280" }}>{user.full_name}</p>
                            )}
                            {user.organisation && (
                              <p style={{ margin: 0, fontSize: 11, color: "#9CA3AF" }}>{user.organisation}</p>
                            )}
                          </td>
                          {/* Role */}
                          <td style={{ padding: "12px 16px" }}>
                            <RolePill role={user.role} />
                          </td>
                          {/* Credits */}
                          <td style={{ padding: "12px 16px" }}>
                            <span
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#D4A843",
                              }}
                            >
                              {user.credit_balance}
                            </span>
                          </td>
                          {/* Spent */}
                          <td style={{ padding: "12px 16px" }}>
                            <span
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: 12,
                                color: "#6B7280",
                              }}
                            >
                              {user.credits_spent}
                            </span>
                          </td>
                          {/* Last Login */}
                          <td style={{ padding: "12px 16px" }}>
                            <span style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-jetbrains)" }}>
                              {formatDate(user.last_login)}
                            </span>
                          </td>
                          {/* Status */}
                          <td style={{ padding: "12px 16px" }}>
                            <StatusPill active={user.is_active} />
                          </td>
                          {/* Actions */}
                          <td style={{ padding: "12px 16px" }}>
                            {user.role !== "admin" && (
                              <div className="flex items-center" style={{ gap: 8, flexWrap: "wrap" }}>
                                {/* Grant credits */}
                                <div className="flex items-center" style={{ gap: 4 }}>
                                  <input
                                    type="number"
                                    min={1}
                                    placeholder="0"
                                    value={grantInputs[user.user_id] ?? ""}
                                    onChange={(e) =>
                                      setGrantInputs((p) => ({ ...p, [user.user_id]: e.target.value }))
                                    }
                                    style={{
                                      width: 60,
                                      height: 32,
                                      border: "1px solid #E5E7EB",
                                      borderRadius: 6,
                                      padding: "0 8px",
                                      fontSize: 13,
                                      fontFamily: "var(--font-jetbrains)",
                                      color: "#0D1B2A",
                                      outline: "none",
                                    }}
                                  />
                                  <button
                                    onClick={() => handleGrantCredits(user.user_id, user.credit_balance)}
                                    style={{
                                      height: 32,
                                      padding: "0 12px",
                                      background: "#D4A843",
                                      border: "none",
                                      borderRadius: 6,
                                      color: "#0D1B2A",
                                      fontSize: 12,
                                      fontWeight: 600,
                                      cursor: "pointer",
                                      fontFamily: "var(--font-inter)",
                                    }}
                                  >
                                    Grant
                                  </button>
                                  {grantFeedback[user.user_id] === "success" && (
                                    <span style={{ fontSize: 12, color: "#065F46" }}>Granted</span>
                                  )}
                                  {grantFeedback[user.user_id] === "error" && (
                                    <span style={{ fontSize: 12, color: "#991B1B" }}>Failed</span>
                                  )}
                                </div>
                                {/* Deactivate / Activate */}
                                <button
                                  onClick={() => handleToggleActive(user.user_id, user.is_active)}
                                  style={{
                                    height: 32,
                                    padding: "0 12px",
                                    background: user.is_active ? "#FEE2E2" : "#D1FAE5",
                                    border: "none",
                                    borderRadius: 6,
                                    color: user.is_active ? "#991B1B" : "#065F46",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontFamily: "var(--font-inter)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {user.is_active ? "Deactivate" : "Activate"}
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── Section 3: Recent Transactions ── */}
            <div style={{ marginTop: 24 }}>
              <SectionLabel>Recent Activity</SectionLabel>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 10,
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                }}
              >
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                        {["Date", "User", "Type", "Credits", "Formulation ID"].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "10px 16px",
                              textAlign: "left",
                              fontSize: 10,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              color: "#9CA3AF",
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.transactions.slice(0, 20).map((tx, i) => (
                        <tr
                          key={tx.transaction_id}
                          style={{
                            borderBottom: i < Math.min(data.transactions.length, 20) - 1 ? "1px solid #F3F4F6" : "none",
                          }}
                        >
                          <td style={{ padding: "10px 16px" }}>
                            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, color: "#6B7280" }}>
                              {formatDateTime(tx.created_at)}
                            </span>
                          </td>
                          <td style={{ padding: "10px 16px", fontSize: 12, color: "#0D1B2A" }}>
                            {tx.email}
                          </td>
                          <td style={{ padding: "10px 16px" }}>
                            <TxPill reason={tx.reason} />
                          </td>
                          <td style={{ padding: "10px 16px" }}>
                            <span
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: 13,
                                fontWeight: 600,
                                color: tx.delta > 0 ? "#065F46" : "#991B1B",
                              }}
                            >
                              {tx.delta > 0 ? `+${tx.delta}` : tx.delta}
                            </span>
                          </td>
                          <td style={{ padding: "10px 16px" }}>
                            {tx.formulation_id ? (
                              <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: 11, color: "#9CA3AF" }}>
                                {tx.formulation_id.slice(0, 8)}
                              </span>
                            ) : (
                              <span style={{ color: "#E5E7EB" }}>—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── Section 4: Usage breakdown ── */}
            <div style={{ marginTop: 24, marginBottom: 32 }}>
              <SectionLabel>Usage by Report Level</SectionLabel>
              <div className="flex" style={{ gap: 12 }}>
                {[
                  { reason: "quick", label: "Quick Formula" },
                  { reason: "brief", label: "Intelligence Brief" },
                  { reason: "dossier", label: "Dossier" },
                ].map(({ reason, label }) => {
                  const count =
                    data.usage_by_level.find((u) => u.reason === reason)?.count ?? 0
                  return (
                    <div
                      key={reason}
                      style={{
                        flex: 1,
                        background: "#ffffff",
                        borderRadius: 10,
                        border: "1px solid #E5E7EB",
                        padding: "16px 20px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#9CA3AF",
                          fontFamily: "var(--font-inter)",
                          margin: "0 0 8px",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          color: "#0D1B2A",
                          fontFamily: "var(--font-inter)",
                          margin: 0,
                          lineHeight: 1,
                        }}
                      >
                        {count}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
