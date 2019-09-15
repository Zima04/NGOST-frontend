<template>
    <div class="container">
        <h1 class="title">Личная информация</h1>
        <div class="">
            <div class="tabs">
                <ul>
                    <li class="active">
                        <a href="#" class="active">Account</a>
                    </li>
                    <li>
                        <a href="#">Информация о компании</a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <form>
                    <div class="">
                        <div class="">
                            <label for="login">Логин <span class="form-required">*</span></label>
                            <input class="" type="text" id="login" name="login">
                        </div>
                        <div class="">
                            <label for="current_password">Текущий Пароль</label>
                            <input type="password" id="current_password" class="">
                        </div>
                        <div class="">
                            <label for="">E-mail <span class="form-required">*</span></label>
                            <input type="email" class="" id="email" name="email">
                        </div>
                        <div class="">
                            <div class="">
                                <label for="password">Пароль</label>
                                <input class="" id="password" type="password">
                            </div>
                            <div class="">
                                <label for="confirm_password">Подтвердите пароль</label>
                                <input class="" id="confirm_password" type="password">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="">
                            <label for="firstname">Имя</label>
                            <input class="" type="text" id="firstname" name="firstname">
                        </div>

                        <div class="">
                            <label for="phone">Мобильный телефон <span class="form-required">*</span></label>
                            <input class="" type="tel" id="phone" name="phone">
                        </div>

                        <div class="">
                            <label for="county">Страна</label>
                            <input class="" type="text" id="county" name="county">
                        </div>
                        
                        <div class="">
                            <label for="image">Загрузить изображение</label>
                            <input type="file" id="image" class="">
                        </div>
                        
                        <div class="">
                            <label for="city">Город</label>
                            <input class="" type="text" id="city" name="city">
                        </div>
                        
                        <div class="">
                            <label for="lastname">Фамилия</label>
                            <input class="" type="text" id="lastname" name="lastname">
                        </div>
                        
                        <div class="">
                            <input type="checkbox" id="notification" class="">
                            <label for="notification" class="">Оповещать об изменении состояния документа по электронной почте</label>
                        </div>
                        
                        <div class="">
                            <input type="checkbox" id="advertising" class="">
                            <label for="advertising" class="">Подписаться на информационную рассылку сервиса</label>
                        </div>
                        
                        <div class="">
                            <input type="submit" value="Save" class="">
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>