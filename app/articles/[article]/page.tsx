import Image from 'next/image';
import MDX from '../../components/MDX';
import { getArticle } from '../../utils/filesystem';
import 'highlight.js/styles/atom-one-dark.css';
import '../../../styles/article.css';

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticle(`${params.article}.mdx`);

  return (
    <div className={'prose-content'}>
      {/* Article Title */}
      <h1 className={'mb-0'}>{blogContent.frontMatter.title}</h1>

      {/* Article Metadata */}
      <div className={'flex items-center'}>
        <Image src={blogContent.frontMatter.authorImage} alt={`Image of ${blogContent.frontMatter.author} image`} width={35} height={35} className={'rounded-full shadow-lg'} />
        <div className={'ml-4 flex w-full items-center justify-between text-gray-400'}>
          <div className={'flex flex-col'}>
            <span className={'text-amore-red'}>{blogContent.frontMatter.author}</span>
            <span className={'text-sm text-gray-400'}>{blogContent.frontMatter.date}</span>
          </div>
          <p className={'text-sm'}>{blogContent.readingTime}</p>
        </div>
      </div>

      {/* Article Body */}
      <MDX {...blogContent.source} />
    </div>
  );
}
