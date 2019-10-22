import * as React from 'react'

import { PropertyListingsConsumer } from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import PropertyDetails from '../../components/propertyDetails'

function Details({ propertyId }) {
  return (
    <BaseLayout miniHero>
      <div className="container">
        <PropertyListingsConsumer>
          {({ getListingByPropertyId }) => (
            <PropertyDetails listing={getListingByPropertyId(propertyId)} />
          )}
        </PropertyListingsConsumer>
      </div>
    </BaseLayout>
  )
}

export default Details
