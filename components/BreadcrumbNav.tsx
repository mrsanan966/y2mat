import {
  Breadcrumb,
  BreadcrumbItem as UICBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb className="max-w-7xl mx-auto px-4 py-2 text-white">
      <BreadcrumbList>
        <UICBreadcrumbItem>
          <BreadcrumbLink href="/" aria-label="Home">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </UICBreadcrumbItem>
        <BreadcrumbSeparator />

        {items.map((item, index) => (
          <UICBreadcrumbItem key={index}>
            {index < items.length - 1 ? (
              <>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbLink href={item.href} aria-current={item.isCurrent ? "page" : undefined}>
                {item.label}
              </BreadcrumbLink>
            )}
          </UICBreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
