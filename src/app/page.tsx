import TopicsList from '../components/TopicsList'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Lovers list</h1>{' '}
      <p className="mb-4">내가 만나고 싶은 사람들을 찾아서~!</p>
      <TopicsList />
    </div>
  )
}
