import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  // query
  //   WIP

  return (
    <div className="p-3">
      {/* TODO: Side bar here */}
      <Sidebar slug={params.slug} />
      {/* TODO: Navbar */}
    </div>
  );
};

export default Layout;
