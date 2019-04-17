import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import '../Styling/Map.css'
import {geoCoder} from "../Utilities/Utilities"

class myMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  componentDidMount(){
    console.log("Map did Mount, props are")
    console.log("User address is:", this.props.location.item.users[0].address)
    let address = this.props.location.item.users[0].address
    const API_KEY = "7RNyAHse9r9wjXT9pJUwBuwAdHnp40KL"
    const URL = `http://open.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${address}`
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      let lat = data.results[0].locations[0].displayLatLng.lat
      let lng = data.results[0].locations[0].displayLatLng.lng
      this.setState({lat: lat, lng: lng})
      console.log("return data from API", data.results[0].locations[0].displayLatLng)
  })
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
        </Marker>
      </Map>
    )
  }
}
export default myMap
