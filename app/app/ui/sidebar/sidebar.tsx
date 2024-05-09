import { Stack } from "@mui/material";
import SidebarLink from "./sidebar-link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MicExternalOnOutlinedIcon from "@mui/icons-material/MicExternalOnOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";

export default function Sidebar() {
  return (
    <nav>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          backgroundColor: "white",
          height: "100vh",
          width: "80px",
          borderRightWidth: "1px",
          borderRightStyle: "solid",
          borderRightColor: "borderGrey.main",
        }}
      >
        <SidebarLink href="/" icon={HomeOutlinedIcon} tooltip="Home" />
        <SidebarLink
          href="/artists"
          icon={MicExternalOnOutlinedIcon}
          tooltip="Artists"
        />
        <SidebarLink href="/albums" icon={AlbumOutlinedIcon} tooltip="Albums" />
        <SidebarLink
          href="/tracks"
          icon={AudiotrackOutlinedIcon}
          tooltip="Tracks"
        />
      </Stack>
    </nav>
  );
}
