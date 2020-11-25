* 환경 설정

```mark
$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
$ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc
$ exec "$SHELL"
```

* 파이썬 설치

```markdown
pyenv install 3.7.4
pyenv global 3.7.4
python -V
```

* clone

```
$ git clone https://lab.ssafy.com/kma9271/final-pjt.git
```

* nginx

```
server_name *.compute.amazonaws.com;

location / {
  uwsgi_pass unix:///home/ubuntu/{ProjectName}/tmp/{ProjectName}.sock;
  include uwsgi_params;
}

location /static/ {
  alias /home/ubuntu/{ProjectName}/staticfiles/;
}
```

```
server_name *.compute.amazonaws.com;

location / {
  uwsgi_pass unix:///home/ubuntu/moviesite/tmp/moviesite.sock;
  include uwsgi_params;
}

location /static/ {
  alias /home/ubuntu/moviesite/static_files/;
}
```

* uwsgi

```
[uwsgi]
chdir = /home/ubuntu/{ProjectName}
module = {ProjectName}.wsgi:application
home = /home/ubuntu/{ProjectName}/venv

uid = ubuntu
gid = ubuntu

socket = /home/ubuntu/{ProjectName}/tmp/{ProjectName}.sock
chmod-socket = 666
chown-socket = ubuntu:ubuntu

enable-threads = true
master = true
vacuum = true
pidfile = /home/ubuntu/{ProjectName}/tmp/{ProjectName}.pid
logto = /home/ubuntu/{ProjectName}/log/uwsgi/@(exec://date +%%Y-%%m-%%d).log
log-reopen = true
```

```
[uwsgi]
chdir = /home/ubuntu/moviesite
module = moviesite.wsgi:application
home = /home/ubuntu/moviesite/venv

uid = ubuntu
gid = ubuntu

socket = /home/ubuntu/moviesite/tmp/moviesite.sock
chmod-socket = 666
chown-socket = ubuntu:ubuntu

enable-threads = true
master = true
vacuum = true
pidfile = /home/ubuntu/moviesite/tmp/moviesite.pid
logto = /home/ubuntu/moviesite/log/uwsgi/@(exec://date +%%Y-%%m-%%d).log
log-reopen = true
```

* daemon

```
[Unit]
Description=uWSGI Service
After=syslog.target

[Service]
User=ubuntu
ExecStart=/home/ubuntu/moviesite/{VirtualenvName}/bin/uwsgi -i /home/ubuntu/{ProjectName}/.config/uwsgi/{ProjectName}.ini

Restart=always
KillSignal=SIGQUIT
Type=notify
StandardError=syslog
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```

```
[Unit]
Description=uWSGI Service
After=syslog.target

[Service]
User=ubuntu
ExecStart=/home/ubuntu/moviesite/venv/bin/uwsgi -i /home/ubuntu/moviesite/.config/uwsgi/moviesite.ini

Restart=always
KillSignal=SIGQUIT
Type=notify
StandardError=syslog
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```



* 심볼릭 링크 생성

```
sudo ln -s ~/{ProjectName}/.config/uwsgi/uwsgi.service /etc/systemd/system/uwsgi.service


sudo ln -s ~/moviesite/.config/uwsgi/uwsgi.service /etc/systemd/system/uwsgi.service
```

* 등록

```
# daemon reload
sudo systemctl daemon-reload

# uswgi daemon enable and restart
sudo systemctl start nginx
sudo systemctl enable uwsgi
sudo systemctl restart uwsgi.service

# check daemons
sudo systemctl | grep nginx
sudo systemctl | grep uwsgi

# restart
sudo systemctl restart nginx
sudo systemctl restart uwsgi

# status check
systemctl status nginx.service
systemctl status uwsgi
```

```
sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill
```



