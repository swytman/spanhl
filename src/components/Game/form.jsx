var React = require('react');

export default function game_teamplate(){
    return (<form className='form-horizontal' role='form'>
        <div className='form-group'>
            <label className='col-sm-12' for='title'>Команда</label>
            <div className='col-sm-12'>
                <select className='form-control' ref='userInput' defaultValue=''required>
                    <option value='' disabled>Команда</option>
                                {
                                    this.props.game.teams.map(function(team) {
                                        return <option key={team.id}
                value={team.title}>{team.title}</option>;
            })
            }
            </select>
        </div>
    </div>
    <div className='form-group'>
        <label className='col-sm-12' for='goals'>Голы по периодам</label>
        <div className='col-sm-12'>
        <input
        name='home_score_1'
        type='text'
        className='form-control'
        placeholder='1-й'
        />
        </div>
        <div className='col-sm-12'>
            <input
            name='home_score_2'
            type='text'
            className='form-control'
            placeholder='2-й'
            />
        </div>
    <div className='col-sm-12'>
        <input
        name='home_score_3'
        type='text'
        className='form-control'
        placeholder='3-й'
        />
        </div>
        <div className='col-sm-12'>
            <input
            name='home_score_ot'
            type='text'
            className='form-control'
            placeholder='ОТ'
            />
        </div>
    <div className='col-sm-12'>
        <input
        name='home_score_b'
        type='text'
        className='form-control'
        placeholder='Б'
        />
        </div>
    </div>

        <div className='form-group'>
            <label className='col-sm-12' for='goals'>Штрафы по периодам</label>
            <div className='col-sm-12'>
                <input
                name='home_penalty_1'
                type='text'
                className='form-control'
                placeholder='1-й'
                />
            </div>
            <div className='col-sm-12'>
                <input
                name='home_penalty_2'
                type='text'
                className='form-control'
                placeholder='2-й'
                />
            </div>
            <div className='col-sm-12'>
                <input
                name='home_penalty_3'
                type='text'
                className='form-control'
                placeholder='3-й'
                />
            </div>
            <div className='col-sm-12'>
                <input
                name='home_penalty_ot'
                type='text'
                className='form-control'
                placeholder='ОТ'
                />
            </div>
        </div>

        <div className='form-group'>
            <label className='col-sm-12' for='goals'>Удары по периодам</label>
            <div className='col-sm-12'>
                <input
                name='home_shots_1'
                type='text'
                className='form-control'
                placeholder='1-й'
                />
            </div>
            <div className='col-sm-12'>
                <input
                name='home_shots_2'
                type='text'
                className='form-control'
                placeholder='2-й'
                />
            </div>
            <div className='col-sm-12'>
                <input
                name='home_shots_3'
                type='text'
                className='form-control'
                placeholder='3-й'
                />
            </div>
            <div className='col-sm-12'>
                <input
                name='home_shots_ot'
                type='text'
                className='form-control'
                placeholder='ОТ'
                />
            </div>
        </div>

        <div className='form-group'>
            <label className='col-sm-12' for='title'>Голы в большинстве</label>
            <div className='col-sm-12'>
                <input
                type='text'
                className='form-control'
                placeholder='' />
            </div>
        </div>

        <div className='form-group'>
            <div className='col-sm-12'>
                <div class='checkbox'>
                    <label>
                        <input name='home_fast' type='checkbox'/> Быстрый гол
                    </label>
                </div>
            </div>
            <div className='col-sm-12'>
                <div class='checkbox'>
                    <label>
                        <input name='home_first' type='checkbox'/> Первый гол
                    </label>
                </div>
            </div>
            <div className='col-sm-12'>
                <div class='checkbox'>
                    <label>
                        <input name='home_disq' type='checkbox'/> Дисквалификация
                    </label>
                </div>
            </div>
        </div>

    </form>)

}