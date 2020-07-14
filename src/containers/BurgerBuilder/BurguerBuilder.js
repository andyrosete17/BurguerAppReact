import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burguer from '../../components/Burger/Burger';


class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burguer/>
                <div>Build Controls</div>
            </Aux>
            );
        }
};

export default BurgerBuilder;