import './App.css'
import teamsData from './CollegeBasketballTeams.json'
import Heading from './components/Heading'
import TeamList from './components/TeamList'
import type { Team } from './components/TeamCard'

function App() {
  const teams = teamsData.teams as Team[]

  return (
    <main>
      <Heading
        title="NCAA College Basketball Teams"
        subtitle="Explore schools, mascots, and locations for teams across college basketball."
      />
      <TeamList teams={teams} />
    </main>
  )
}

export default App
