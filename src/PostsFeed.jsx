

const PostsFeed = () => {
    const postsFeedFromFakeApi = [
        {
            id: 1,
            title: "Vous ne devinerez jamais ce qui s'est passé",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: true,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
                id: 1,
                firstName: "John",
                lastName: "Doe",
            },
        },
        {
            id: 2,
            title: "Vous ne devinerez jamais ce qui s'est passé 2",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: false,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
                id: 2,
                firstName: "Jane",
                lastName: "Doe",
            },
        },
        {
            id: 3,
            title: "Vous ne devinerez jamais ce qui s'est passé 3",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: true,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
                id: 3,
                firstName: "Jean",
                lastName: "Bon",
            },
        },
        {
            id: 4,
            title: "Vous ne devinerez jamais ce qui s'est passé 4",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: true,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
                id: 4,
                firstName: "Json",
                lastName: "Statham",
            },
        },
    ];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    return (
        <div>
            <h2>Flux de publications</h2>
            {postsFeedFromFakeApi.map((post) => {
                if (post.isPublished) {
                    const formattedPublishedAt = formatDate(post.publishedAt);
                    return (
                        <div key={post.id} className="post">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <img src={post.image} alt="Post" />
                            <p>Publié le {formattedPublishedAt}</p>
                            <p>Auteur : {post.author.firstName} {post.author.lastName}</p>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default PostsFeed;
