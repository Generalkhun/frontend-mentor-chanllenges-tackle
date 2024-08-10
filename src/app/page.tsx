import Link from "next/link";

export default function Home() {

  type Levels = 'newbie' | 'junior' | 'intermediate' | 'advance'
  interface Challenge {
    name: string,
    url: string,
    level: Levels
  }

  // Add new challenges here...
  const challenges: Challenge[] = [
    {
      name: 'Recipe Page',
      url: 'recipe-page',
      level: 'newbie',
    },
  ]

  // Each group
  const newbieChallenges = challenges.filter((challenge: Challenge) => challenge.level === 'newbie')
  const juniorChallenges = challenges.filter((challenge: Challenge) => challenge.level === 'junior')
  const intermediateChallenges = challenges.filter((challenge: Challenge) => challenge.level === 'intermediate')
  const advanceChallenges = challenges.filter((challenge: Challenge) => challenge.level === 'advance')
  return (
    <main>
      <div>
        <div className="text-center mt-10">
          <p className="text-xl text-gray-300 text-opacity-65">
            Frontend Mentor Challenges Completion Lists
          </p>
          <button className="w-[20%] min-w-[200px] min-h-[35px] bg-gray-300 text-black rounded-lg mt-5">
            <Link href={'https://www.frontendmentor.io/challenges?sort=difficulty%7Casc&type=free%2Cfree-plus'}>References</Link>
          </button>
        </div>
        <div className="m-5 flex justify-between gap-5 min-h-[100px] min-w-[100px]">
          {/* newbie */}
          <div className="h-full w-full rounded-md border-2 border-solid border-blue-400">
            <div className="bg-blue-400 text-center">
              <p className="text-lg">Newbie</p>
            </div>
            {newbieChallenges.map(({ name, url }: Challenge, idx) => (
              <button className="bg-blue-300 text-black w-full" key={idx}>
                <Link href={url}>{name}</Link>
              </button>
            ))}
          </div>

          {/* junior */}
          <div className="h-full w-full rounded-md border-2 border-solid border-green-400">
            <div className="bg-green-400 text-center">
              <p className="text-lg">Junior</p>
            </div>
            {juniorChallenges.map(({ name, url }: Challenge, idx) => (
              <button className="bg-green-300 text-black w-full" key={idx}>
                <Link href={url}>{name}</Link>
              </button>
            ))}
          </div>

          {/* intermediate */}
          <div className="h-full w-full rounded-md border-2 border-solid border-orange-400">
            <div className="bg-orange-400 text-center">
              <p className="text-lg">Intermediate</p>
            </div>
            {intermediateChallenges.map(({ name, url }: Challenge, idx) => (
              <button className="bg-orange-300 text-black w-full" key={idx}>
                <Link href={url}>{name}</Link>
              </button>
            ))}
          </div>

          {/* advance */}
          <div className="h-full w-full rounded-md border-2 border-solid border-orange-600">
            <div className="bg-orange-600 text-center">
              <p className="text-lg">Advance</p>
            </div>
            {advanceChallenges.map(({ name, url }: Challenge, idx) => (
              <button className="bg-orange-600 text-black w-full" key={idx}>
              <Link href={url}>{name}</Link>
            </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
