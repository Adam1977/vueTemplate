
import apiPrefix from './apiPathConfig'

/**
 * @param platformCalledName
 */
export default function(platformCalledName) {
  let environmentUrl
  switch (process.env.ENV_CONFIG) {
    case 'dev' :
      environmentUrl = apiPrefix[platformCalledName].dev
      break
    case 'test' :
      environmentUrl = apiPrefix[platformCalledName].test
      break
    case 'prod' :
      environmentUrl = apiPrefix[platformCalledName].prod
      break
  }
  return environmentUrl
}
