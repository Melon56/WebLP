import { writable } from "svelte/store"

export interface DisplayData {
	name: string
	artists: string[]
	lyric: Lyric
}
export type Lyric = {
	type: string
	number: number
	text: string
}
export type Song = {
	id: number
	name: string
	artists: string[]
	lyrics: Lyric[]
}
export let displayData = writable<DisplayData | null>(null)

export interface Settings {
	display: {
		font: {
			family: Font
			weight: number
			color: `#${string}`
			size: number
		}
		bg: {
			type: DisplayBGType
			value: HexString | [HexString, HexString] | URLString | ""
		}
		transition: Transition
	}
}
export enum Transition {
	none = "None",
	fade = "Fade",
	morph = "Morph",
	stack = "Stack",
}
export enum DisplayBGType {
	color = "Color",
	image = "Image",
	gradient = "Gradient",
}
export type HexString = `#${string}`
export type URLString = `http${string}://${string}`
export enum Font {
	arial = "Arial",
	verdana = "Verdana",
	tahoma = "Tahoma",
	trebuchetMS = "'Trebuchet MS'",
	timesNewRoman = "'Times New Roman'",
	georgia = "Georgia",
	garmond = "Garamond",
	courierNew = "'Courier New'",
	brushScriptMT = "'Brush Script MT'",
}
export const defaultSettings: Settings = {
	display: {
		font: {
			family: Font.arial,
			color: "#ffffff",
			weight: 400,
			size: 1,
		},
		bg: {
			type: DisplayBGType.color,
			value: "#000000",
		},
		transition: Transition.fade,
	},
}
export let settings = writable<Settings>(null!)

export let aspectRatio = writable<number>(null!)

export type Service = {
	id: number
}[]

export let service = writable<Service>([])
