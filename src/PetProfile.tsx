import React from "react";

interface PetProfileProps {
    image: string;
    description?: string;
    name: string;
};

class PetProfile extends React.Component<PetProfileProps, {}> {
    render() {
        return (
            <>
                <p>{this.props.name}</p>
                <img src={this.props.image} alt="dog image"/>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default PetProfile;