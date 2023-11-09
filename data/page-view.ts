import prisma from "./prisma";

export async function viewPage({ page, ip }: { page: string; ip: string }) {
  const isViewed = await prisma.pageView.findFirst({
    where: {
      viewed_at: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      AND: {
        ip_request: ip,
        AND: {
          page_href: page,
        },
      },
    },
  });
  if (isViewed) {
    return isViewed;
  } else {
    return await prisma.pageView.create({
      data: {
        ip_request: ip,
        page_href: page,
      },
    });
  }
}
export async function getViewPageCount({ page }: { page: string }) {
  return await prisma.pageView.count({
    where: {
      page_href: page,
    },
  });
}

export async function getViewPageTotalCount() {
  return await prisma.pageView.count();
}
