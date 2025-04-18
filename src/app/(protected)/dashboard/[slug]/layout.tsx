import Infobar from "@/components/global/infobar";
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
      {/* TODO: Infobar */}
      <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
        <Infobar slug={params.slug} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
