

const Comments = async ({promise}) => {
  const comments = await promise
  return (
    <div className="mt-6">
        <h2 className="text-xl font-bold">Comments</h2>
        {comments.map((comment) => {
          const { id, name, email, body } = comment;
          return (
            <div className="space-y-1" key={id}>
              <p className="">{name}</p>
              <p className="text-[14px]">{email}</p>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
  )
}

export default Comments
