import { signOut } from "@/auth";
import { Metadata } from "next";
import axios from "@/app/lib/axios";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  async function getData() {
    "use server";

    try {
      const result = await axios.get("users/661d4e4c74f8f7a667faa73b");
      return result.data?.data?.user?.name;
    } catch (error) {
      return "";
    }
  }

  const name = await getData();

  return (
    <main>
      <p>Dashboard</p>

      <p>{name}</p>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button>Logout</button>
      </form>
    </main>
  );
}
