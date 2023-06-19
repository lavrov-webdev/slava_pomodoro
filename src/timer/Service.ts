import { injectable } from 'inversify'

export type TGetDataRes = {
  work_delta: number,
  pause_delta: number,
  pause_start: undefined | number,
  end_time: number,
  time_left: number,
  is_work: boolean,
  is_paused: boolean,
  pomodoro_cnt: number
}


@injectable()
export class Service {
  async getData() {
    const data = await fetch('http://' + import.meta.env.VITE_POMODORO_HOST + ':' + import.meta.env.VITE_POMODORO_PORT)
    return (await data.json()) as TGetDataRes
  }
}
