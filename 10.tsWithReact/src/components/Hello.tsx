import * as React from "react";

interface HelloProps {
    name: string,
    age: number
};

// first param of this class is the props (HelloProps), the second is the state object ({foo: string})
class Hello extends React.Component<HelloProps, {foo: string}> {
    constructor(props){
        super(props);
        this.state = {foo: "FOO"}
    }
    render(){
        return (
            <h2>
                Hello, my name is { this.props.name }, and Im {this.props.age} years old,
                Foo is {this.state.foo}
            </h2>
        )
    }
}

export default Hello;