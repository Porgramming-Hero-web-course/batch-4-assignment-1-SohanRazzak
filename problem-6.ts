{
    // Problem-6
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Profile, updateInfo: Partial<Profile>) => {
        const updatedProfile = { ...profile, ...updateInfo }
        return updatedProfile
    }

    // sample input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}