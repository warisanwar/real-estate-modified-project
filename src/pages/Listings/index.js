import * as React from 'react'

import { PropertyListingsConsumer } from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import Listing from '../../components/listing'

function Listings() {
  return (
    <BaseLayout>
      <div className="container">
        <PropertyListingsConsumer>
          {({ propertyListings }) => (
            <>
              <div className="columns">
                {propertyListings.map(listing => (
                  <Listing listing={listing} />
                ))}
              </div>
            </>
          )}
        </PropertyListingsConsumer>
      </div>
    </BaseLayout>
  )
}

export default Listings
