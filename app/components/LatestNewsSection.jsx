export default function LatestNewsSection() {
    const newsItems = [
      { id: 1, title: 'Latest News 1', excerpt: 'Exciting update about our product!' },
      { id: 2, title: 'Latest News 2', excerpt: 'New features coming soon!' }
    ]
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="flex justify-center space-x-6">
            {newsItems.map(news => (
              <div 
                key={news.id} 
                className="p-6 border rounded-lg shadow-md w-80"
              >
                <h3 className="text-xl font-semibold mb-4">{news.title}</h3>
                <p className="text-gray-600">{news.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }