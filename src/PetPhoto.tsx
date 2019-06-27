import React from "react";

interface PetPhotoProps {
    image: string;
};


class PetPhoto extends React.Component<PetPhotoProps, {}> {

    render() {
        return (
            <div>
                <img src={this.props.image} alt="dog image"/>
            </div>
        )
    }
}

export default PetPhoto;