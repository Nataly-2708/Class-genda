import {ExpoConfig, ConfigContext } from 'expo/config'
import * as dotenv from 'dotenv'

dotenv.config()

export default ({ config }: ConfigContext): ExpoConfig => {
    return {
        ...config,
        slug: 'ClassGenda',
        name: 'ClassGenda',
        extra: {
            ...config.extra,
            supabaseUrl: process.env.Project_URL,
            supabaseAnonKey: process.env.Project_KEY
        }
    }
}