// import React from 'react';
// import {Card, TextField, FormLayout, Layout} from '@shopify/polaris';

// export default class Section extends React.Component {
//   render() {
//     return (
//       <Layout>
//   <Layout.AnnotatedSection
//     title="Store details"
//     description="Shopify and your customers will use this information to contact you."
//   >
//     <Card sectioned>
//       <FormLayout>
//       <input type="text" label="Store name"  />
//         <TextField type="text" label="Store name" />
//         <TextField type="email" label="Account email"  />
//         <TextField label="Store Address" />
//         <TextField label="Store Url" />
//       </FormLayout>
//     </Card>
//   </Layout.AnnotatedSection>
// </Layout>
//     );
//   }
// }

import React, {useCallback, useState} from 'react';
import {TextField} from '@shopify/polaris';

export default function Section() {
  const [value, setValue] = useState('');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return  <TextField label="Enter name" value={value} onChange={()=>{
    
  }} />  ;
}

