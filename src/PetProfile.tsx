import React from "react";
import { JSXElement } from "@babel/types";

interface PetProfileProps {
  image: string;
  description?: string;
  name: string;
}

class PetProfile extends React.Component<PetProfileProps, {}> {
  render(): JSX.Element {
    return (
      <>
        <p>{this.props.name}</p>
        <img src={this.props.image} alt="dog image" />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default PetProfile;
