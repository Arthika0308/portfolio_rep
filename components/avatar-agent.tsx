"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function AvatarAgent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("loadedmetadata", updateDuration)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("loadedmetadata", updateDuration)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
            Meet My AI Avatar
          </h2>
          <p className="text-gray-300 text-lg">A personalized introduction powered by AI avatar technology</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Avatar video section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-pink-500/20 p-6 relative overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg relative overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop={false}
                  playsInline
                  poster="/images/ai-avatar-cover.png"
                >
                  <source src="/avatar-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                {/* Play button overlay */}
                {!isPlaying && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Button
                      onClick={togglePlay}
                      className="w-16 h-16 rounded-full bg-pink-500/80 hover:bg-pink-500 backdrop-blur-sm"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Video controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={togglePlay}
                    variant="outline"
                    size="sm"
                    className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={toggleMute}
                    variant="outline"
                    size="sm"
                    className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>
                <span className="text-sm text-gray-400">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Personal Introduction</h3>
              <p className="text-gray-300 leading-relaxed">
                Watch my AI-generated avatar deliver a personalized introduction about my journey in AI engineering, key
                projects, and vision for the future of artificial intelligence. This avatar was created using
                cutting-edge AI video generation technology.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">What you'll learn:</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <span className="text-pink-400 mr-2">•</span>
                  My background in AI and machine learning
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-pink-400 mr-2">•</span>
                  Key projects and technical achievements
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-pink-400 mr-2">•</span>
                  Vision for the future of AI technology
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-pink-400 mr-2">•</span>
                  Insights into building intelligent systems
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="text-pink-400 font-semibold">Tech Stack:</span> This avatar was created using advanced
                AI video generation technology, showcasing the latest in synthetic media and digital human creation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
