import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Blog page for Solid Pro",
};

const BlogPage = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <div className="max-w-c-1280 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.map((post) => (
            <BlogItem key={post._id} blog={post} />
          ))}
        </div>
      </div>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </section>
  );
};

export default BlogPage;
