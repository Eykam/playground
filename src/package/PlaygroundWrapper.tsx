import { PlaygroundEmbed } from "./PlaygroundEmbed"
import { UrlConfig, urlConfigSchema } from "../urlconfig"

interface PlaygroundProps {
    model?: string
    prompt?: string
    output?: string
    maxTokens?: number
    temperature?: number
    topP?: number
}

export const PlaygroundWrapper = ({ style }: { style: React.CSSProperties }, props: PlaygroundProps) => {
    const getInitalConfig = () => {
        try {
            const defaultConfig: PlaygroundProps = urlConfigSchema.getDefault()

            for (const [key, entry] of Object.entries(props)) {
                if (entry !== undefined) {
                    defaultConfig[key as keyof PlaygroundProps] = entry
                }
            }
            return { initialConfig: defaultConfig as UrlConfig }
        } catch (error) {
            return { error: error as Error }
        }
    }

    const { initialConfig, error } = getInitalConfig()

    return (
        <div style={style}>
            <PlaygroundEmbed initialConfig={initialConfig} error={error} />
        </div>
    )
}
