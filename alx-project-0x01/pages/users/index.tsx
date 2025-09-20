import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <>
      <Header/>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersPage;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}
