"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
} from "@nextui-org/react";

interface HeaderClientProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export default function HeaderClient({ user }: HeaderClientProps) {
  let authContent: React.ReactNode;
  if (user) {
    authContent = (
      <NavbarItem>
        <Avatar src={user.image || ""} />
      </NavbarItem>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type={"submit"} color={"secondary"} variant={"bordered"}>
            Sign In
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button type={"submit"} color={"primary"} variant={"flat"}>
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className={"shadow mb-6"}>
      <NavbarBrand>
        <Link href={"/"} className={"font-bold"}>
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify={"end"}>{authContent}</NavbarContent>
    </Navbar>
  );
}
