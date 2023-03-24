import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"
import { xata } from './lib/db.server'
import { XataAdapter} from '@next-auth/xata-adapter'

export const handle = SvelteKitAuth({
  adapter: XataAdapter(xata),
  //@ts-expect-error
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
})
