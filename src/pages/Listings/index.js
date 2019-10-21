import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import Listing from '../../components/listing'

function Listings() {
  return (
    <BaseLayout>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings}) => (
              <>
                <div className="columns">
                  {propertyListings.map(listing => (
                    <Listing listing={listing} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </BaseLayout>
  )
}

export default Listings
