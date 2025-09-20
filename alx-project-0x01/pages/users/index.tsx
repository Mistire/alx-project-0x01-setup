import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <>
      <Header/>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {posts.map((post) => (
          <UserCard key={post.id} user={post} />
        ))}
      </div>
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}
