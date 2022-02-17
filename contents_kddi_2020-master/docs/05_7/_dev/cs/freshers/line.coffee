class lineClass
	constructor:()->
		@timeSwich = off
	init:()->
		@modelInit()
		@viewInit()
		return

# MODEL
	modelInit:()->
		@LINE_NUM = 80 # lineの本数
		@LINE_LEN = 1200 # lineの長さ
		@START_RANG = 200 # 始点の出現範囲

		# lineの色の種類
		@lineCol = [
			0xb4c3f1,
			0xf5d2cf,
			0xd2b9d8,
			0xfae78b,
			0xe1e1e3
		]
		# 消えるまでの範囲
		@lostLen = {
			lx : 1000,
			ly : 1000,
			lz : 1000
		}
		# 速度
		@speed = {
			f: 0.4,
			l: 0.05
		}

		#
		# 二点間の直線上のそれぞれの位置(初期値)
		@tn1 = 0
		@tn2 = 0

		# 始点 - 初期値
		lsx = Math.random()*@START_RANG
		lsy = Math.random()*@START_RANG
		lsz = 0
		# 始点 - 負の数まで拡大
		lsxF = lsx*2-@START_RANG
		lsyF = lsy*2-@START_RANG
		lszF = lsz
		# 終点 - 初期値
		lfx = Math.random()*@START_RANG*2
		lfy = Math.random()*@START_RANG*2
		lfz = Math.random()
		# 終点 - 負の数まで拡大
		lfxF = lfx*2-@START_RANG*2
		lfyF = lfy*2-@START_RANG*2
		lfzF = Math.abs(lfz)

		lfxF = if lfxF > 0 then lfxF+150 else lfxF-150
		lfyF = if lfyF > 0 then lfyF+150 else lfyF-150
		# lfzF = if lfzF > 0 then lfzF+50 else lfzF-50

		@p1 = new THREE.Vector3(lsxF,lsyF,lszF) # 始点座標obj格納
		@p2 = new THREE.Vector3(lfxF,lfyF,lfzF) # 終点座標obj格納

		# 色選択
		@lcn = Math.floor(Math.random()*10)%5
		@lc = @lineCol[@lcn]

		@_pointFix()
		return

	_pointFix:()->
		@vp1 = @__lineFormula(@p1.x,@p1.y,@p1.z,@p2.x,@p2.y,@p2.z,0)
		@vp2 = @__lineFormula(@p1.x,@p1.y,@p1.z,@p2.x,@p2.y,@p2.z,0)
		return

	# 3次元の2点を結ぶ直線式
	__lineFormula:(xa,ya,za,xb,yb,zb,t)->
		xc = xb - xa
		yc = yb - ya
		zc = xb - za
		xd = xa + (t * xc)
		yd = ya + (t * yc)
		zd = Math.abs(za + (t * zc))
		co1 = new THREE.Vector3(xd,yd,zd)
		return co1

	vpUpdate:(tn)->
		_vpU = @__lineFormula(@p1.x,@p1.y,@p1.z,@p2.x,@p2.y,@p2.z,tn)
		return _vpU

	vpLength:(xa,ya,za,xb,yb,zb)->
		vx = xb - xa
		vy = yb - ya
		vz = xb - za
		len = Math.sqrt(vx*vx + vy*vy + vz*vz)
		return len

	# VIEW
	viewInit:()->
		return



window.Line = lineClass
