const Profile = () => {
    const userInfosFromFakeApi = {
        firstName: "Rémi",
        lastName: "Le Gall",
        age: 30,
        email: "remi.legall@lapiscine.pro",
        phone: "0684778699",
        address: "12 rue Paul Cezanne",
        city: "Bordeaux",
        zipCode: "33450",
        country: "France",
        job: "étuidant Développeur web"
    };

    return (
        <div>
            <h2>Mon profil</h2>
            <p>Nom: {userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</p>
            <p>Age: {userInfosFromFakeApi.age}</p>
            <p>Email: {userInfosFromFakeApi.email}</p>
            <p>Téléphone: {userInfosFromFakeApi.phone}</p>
            <p>Adresse: {userInfosFromFakeApi.address}</p>
            <p>Ville: {userInfosFromFakeApi.city}</p>
            <p>Code postal: {userInfosFromFakeApi.zipCode}</p>
            <p>Pays: {userInfosFromFakeApi.country}</p>
            <p>Emploi: {userInfosFromFakeApi.job}</p>
        </div>
    );
};

export default Profile;
