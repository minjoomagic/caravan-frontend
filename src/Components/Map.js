import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

class myMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }


  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map style={{ width: '100%', height: '400px' }} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
export default myMap
