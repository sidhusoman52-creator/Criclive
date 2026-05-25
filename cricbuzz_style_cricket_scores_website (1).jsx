export default function CricbuzzStyleWebsite() {
  const matches = [
    {
      teams: 'India vs Australia',
      score: 'Loading live score...',
      status: 'Fetching live match data',
    },
  ];

  async function fetchLiveScores() {
    try {
      const response = await fetch(
        'https://api.cricapi.com/v1/currentMatches?apikey=21ba7825-b668-4ef9-b5ed-91680688b513
      );

      const data = await response.json();
      console.log('Live Cricket Data:', data);
    } catch (error) {
      console.error('Error fetching live scores:', error);
    }
  }

  fetchLiveScores();

  const news = [
    'Virat Kohli scores another stunning century in IPL.',
    'Rohit Sharma likely to return for next T20 series.',
    'IPL playoffs race heats up after dramatic finish.',
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">CricLive</h1>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-green-200">Live Scores</a>
            <a href="#" className="hover:text-green-200">Schedule</a>
            <a href="#" className="hover:text-green-200">News</a>
            <a href="#" className="hover:text-green-200">Points Table</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Live Matches</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {matches.map((match, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full animate-pulse">
                    LIVE
                  </span>
                  <span className="text-gray-500 text-sm">T20</span>
                </div>

                <h3 className="text-lg font-bold mb-2">{match.teams}</h3>

                <p className="text-2xl font-semibold text-green-700 mb-3">
                  {match.score}
                </p>

                <p className="text-gray-600 text-sm">{match.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-5">Latest Cricket News</h2>

            <div className="space-y-5">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4"
                >
                  <h3 className="font-semibold text-lg hover:text-green-700 cursor-pointer transition">
                    {item}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Updated 2 hours ago
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-5">IPL Points Table</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between font-semibold border-b pb-2">
                <span>Team</span>
                <span>Pts</span>
              </div>

              <div className="flex justify-between">
                <span>CSK</span>
                <span>16</span>
              </div>

              <div className="flex justify-between">
                <span>MI</span>
                <span>14</span>
              </div>

              <div className="flex justify-between">
                <span>RCB</span>
                <span>12</span>
              </div>

              <div className="flex justify-between">
                <span>KKR</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-700 text-white text-center py-4 mt-10">
        <p>© 2026 CricLive - Live Cricket Scores & Updates</p>
      </footer>
    </div>
  );
}
