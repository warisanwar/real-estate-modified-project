import * as React from 'react'

import { PropertyListingsConsumer } from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import Listing from '../../components/listing'
import Filter from '../../components/filter'

function Home() {
  return (
    <BaseLayout>
      <div className="container">
        <PropertyListingsConsumer>
          {({ propertyListings, allListings, updateFilter }) => (
            <>
              <Filter
                updateFilter={updateFilter}
                count={propertyListings.length}
                postcodes={allListings
                  .map(listing => listing.postcode.split(' ')[0])
                  .filter((item, i, arr) => arr.indexOf(item) === i)}
              />
            </>
          )}
        </PropertyListingsConsumer>
      </div>
    </BaseLayout>
  )
}

export default Home
