

const PostsFeed = () => {
    const postsFeedFromFakeApi = [
        // Données des publications
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


// Pour formater une date JavaScript dans le format de date standard francais jj/mm/aaaa, on utilise la méthode toLocaleDateString() appliquée à un objet Date. Ainsi, new Date().toLocaleDateString() retournera la date d’aujourd’hui dans le format jj/mm/aaaa.