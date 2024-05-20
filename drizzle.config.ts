import { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { connect } from 'http2';
dotenv.config({path: '.env'});

if(!process.env.DATABASE_URL){
    console.log('cannot find database url');
}

export default{
    schema: './src/lib/supabase/schema.ts',
    out: '.migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
}satisfies Config;