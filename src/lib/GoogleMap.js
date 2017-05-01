/**
 * Created by dillo_000 on 4/29/2017.
 */
import React, {Component} from 'react';

class GoogleMap extends Component {

    constructor(_props) {
        super(_props);


        this.poop = (<div id="poop"></div>);
        this.coord = {
            lat: 34.158034, lng: -118.448721};
        this.map = new google.maps.Map(this.poop, {
            zoom: 12,
            center: this.coord
        });

    }

    render() {
        new google.maps.Marker({
            position: this.coord,
            map: this.map
        });
        return (
            <div >
                {this.poop}
            </div>
        )
    }
}

export default GoogleMap;