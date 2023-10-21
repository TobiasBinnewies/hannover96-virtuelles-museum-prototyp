import Model_Wd from '@components/models/Model_Wd'
// import Model_Computer from '@components/models/Model_Computer'
// import Model_Testobjekt from '@components/models/Model_Testobjekt'
import Model_Ball from '@components/models/Model_Ball'
import Model_Vase from '@components/models/Model_Vase'
import Model_Empty from '@components/models/Model_Empty'
import Model_Phone from './Model_Phone'
import Model_Phone_Cloudinary from './Model_Phone_Cloudinary'
import Model_Google from '@components/models/Model_Google'
import Model_Google_Drei from '@components/models/Model_Google_Drei'
import Model_Google_Zwei from '@components/models/Model_Google_Zwei'

const models = {
  Model_Wd: <Model_Wd/>,
  Model_Phone: <Model_Phone/>,
  Model_Phone_Cloudinary: <Model_Phone_Cloudinary/>,
  // Model_Computer: <Model_Computer/>,
  // Model_Testobjekt: <Model_Testobjekt/>,
  Model_Ball: <Model_Ball/>,
  Model_Vase: <Model_Vase/>,
  Model_Empty: <Model_Empty/>,
  Model_Google: <Model_Google/>,
  Model_Google_Zwei: <Model_Google_Zwei/>,
  Model_Google_Drei: <Model_Google_Drei/>,
}

export default models
