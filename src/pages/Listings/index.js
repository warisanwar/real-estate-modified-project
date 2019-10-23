import * as React from 'react'

import { PropertyListingsConsumer } from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import Listing from '../../components/listing'

function getPropertiesDisplayText(count) {
  if (count > 1 || count === 0) {
    return 'properties'
  }
  return 'property'
}
function Listings() {
  return (
    <BaseLayout>
      <div className="container">
        <PropertyListingsConsumer>
          {({ propertyListings }) => (
            <>
            <h2 data-cy="property-count">
            {`${propertyListings.length} private ${getPropertiesDisplayText(propertyListings.length)} for sale`}
            </h2>
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
