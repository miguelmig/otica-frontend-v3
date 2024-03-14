import { CardContent } from "@mui/material"
import { Card, CardTitle } from "./ui/card"
import Image from "next/image"

export interface ModelCardProps {
    brand: string
    model: string
    treatment: string
    diameter: string
}

const brands: Record<string, string> = {
    'essilor': '/brand/essilor.png',
    'orma': '/brand/orma.jpeg'
}
export default function ModelCard({
    model, treatment, diameter, brand
} : ModelCardProps) {
    const brandImg: string = brands[brand.toLowerCase()]
    return (
        <Card>
            <CardTitle className="ml-4 mt-4">{model}</CardTitle>
            <CardContent>
                <Image
                    src={brandImg}
                    width={128}
                    height={128}
                    alt="Teste"
                    className="rounded-xl h-32"
                />
                <p >{treatment}</p>
                <p className="text-pretty">⌀ {diameter}</p>
            </CardContent>
        </Card>
    )
}

