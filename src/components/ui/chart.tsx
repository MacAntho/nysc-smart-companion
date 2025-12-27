"use client"
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"
// Format: { [key: string]: string }
const THEME_COLORS = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  muted: "var(--muted)",
} as const
interface ChartConfig {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: Record<string, string>
  }
}
const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)
function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a ChartContainer")
  }
  return context
}
export function ChartContainer({
  id,
  className,
  config,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ReactNode
}) {
  const chartId = React.useId()
  const idToUse = id || `chart-${chartId.replace(/:/g, "")}`
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={idToUse}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid-concentric-polygon]:stroke-border [&_.recharts-polar-grid-concentric-circle]:stroke-border [&_.recharts-polar-radius-axis_line]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={idToUse} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )
  if (!colorConfig.length) {
    return null
  }
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEME_COLORS)
          .map(
            ([theme, color]) => `
[data-chart=${id}] {
  ${colorConfig
    .map(([key, itemConfig]) => {
      const color =
        itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
        itemConfig.color
      return color ? `--color-${key}: ${color};` : null
    })
    .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}
export const ChartTooltip = RechartsPrimitive.Tooltip
/**
 * ChartTooltipContent
 * Fixed TS2339 by using a loose interface for Recharts' runtime property injection
 */
interface ChartTooltipContentProps {
  active?: boolean
  payload?: any[]
  label?: any
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
  className?: string
  labelClassName?: string
  formatter?: (value: any, name: any, item: any, index: number, payload: any[]) => React.ReactNode
}
export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      label,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      nameKey,
      labelKey,
      className,
      labelClassName,
      formatter,
    },
    ref
  ) => {
    const { config } = useChart()
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }
      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = config[key as keyof typeof config]
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label || label
      if (!value) {
        return null
      }
      return (
        <div className={cn("font-medium", labelClassName)}>{value}</div>
      )
    }, [label, labelClassName, hideLabel, payload, config, labelKey])
    if (!active || !payload?.length) {
      return null
    }
    const nestLevels = payload.length > 1 && indicator === "dot"
    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLevels ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = config[key as keyof typeof config]
            const indicatorColor = itemConfig?.color || item.payload?.fill || item.color
            return (
              <div
                key={item.dataKey || item.name}
                className={cn(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter ? (
                  formatter(item.value, item.name, item, index, payload)
                ) : (
                  <>
                    {!hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "border-b-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "flex items-center": nestLevels && indicator === "dot",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLevels ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLevels ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"
export const ChartLegend = RechartsPrimitive.Legend
/**
 * ChartLegendContent
 * Fixed TS2344, TS2339 by ensuring payload is typed correctly and handling length/map safely
 */
interface ChartLegendContentProps {
  className?: string
  hideIcon?: boolean
  payload?: any[]
  verticalAlign?: "top" | "bottom" | "middle"
  nameKey?: string
}
export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()
    if (!payload || !Array.isArray(payload) || payload.length === 0) {
      return null
    }
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || item.name || "value"}`
          const itemConfig = config[key as keyof typeof config]
          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                !hideIcon && (
                  <div
                    className="h-2 w-2 shrink-0 rounded-[2px]"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                )
              )}
              {itemConfig?.label || item.value}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"