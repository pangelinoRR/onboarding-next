"use client";

import NextLink from "next/link";
import { Link, Tooltip } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { usePathname } from "next/navigation";

export default function SidebarLink({
  href,
  icon,
  tooltip,
}: Readonly<{ href: string; icon: SvgIconComponent; tooltip: string }>) {
  const Icon = icon;
  const pathname = usePathname();

  return (
    <Tooltip title={tooltip} placement="right">
      <Link
        href={href}
        component={NextLink}
        color="inherit"
        underline="none"
        sx={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            href === pathname ? "backgroundGrey.shaded" : "inherit",
          borderRadius: "8px",
          ":hover": { backgroundColor: "primary.main" },
        }}
      >
        <Icon />
      </Link>
    </Tooltip>
  );
}
