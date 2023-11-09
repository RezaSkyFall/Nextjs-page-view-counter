import React from "react";
import { headers } from "next/headers";
import { getClientIp } from "@/libs/ip";
import {
  getViewPageCount,
  getViewPageTotalCount,
  viewPage,
} from "@/data/page-view";
import { NextPageContext } from "next";

type Props = {};

async function viewMe() {
  const headersList = headers();
  const ip = getClientIp(headersList);
  const page = headersList.get("x-url");
  if (page && ip) {
    await viewPage({
      ip: ip,
      page: page,
    });
    const _ViewPageCount = await getViewPageCount({ page: page });
    const _ViewPageTotalCount = await getViewPageTotalCount();

    return {
      _ViewPageCount,
      _ViewPageTotalCount,
    };
  }
}

export default async function PageView({}: Props) {
  const pageView = await viewMe();

  return (
    <footer className="border-t border-neutral-600/80 flex flex-col items-center">
      <div className="max-w-md text-xl flex flex-col gap-2 py-2">
        <p>
          {`page view count: `}
          <span className="font-bold text-amber-400">
            {pageView?._ViewPageCount}
          </span>
        </p>
        <p>
          {`site view count: `}
          <span className="font-bold text-amber-400">
            {pageView?._ViewPageTotalCount}
          </span>
        </p>
      </div>
    </footer>
  );
}
